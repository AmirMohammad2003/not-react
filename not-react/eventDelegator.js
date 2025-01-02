const eventRegistry = new WeakMap();
const eventTypeUsage = {};

export const globalEventHandler = function (event) {
  const targetElement = event.target;
  const eventType = event.type;

  let currentElement = targetElement;
  while (currentElement) {
    const registeredEvents = eventRegistry.get(currentElement);
    if (registeredEvents && registeredEvents[eventType]) {
      for (const handler of registeredEvents[eventType]) {
        handler.call(currentElement, event);
      }
      break;
    }
    currentElement = currentElement.parentElement;
  }
};

export const registerElementEvent = function (
  element,
  eventType,
  eventHandler,
) {
  if (!eventRegistry.has(element)) {
    eventRegistry.set(element, {});
  }
  const registeredEvents = eventRegistry.get(element);
  registeredEvents[eventType] = registeredEvents[eventType] || [];
  registeredEvents[eventType].push(eventHandler);

  if (eventTypeUsage[eventType] === undefined) {
    eventTypeUsage[eventType] = 0;
    document.addEventListener(eventType, globalEventHandler);
  }
  eventTypeUsage[eventType]++;
};

export const removeElementEvent = function (element, eventType, eventHandler) {
  const registeredEvents = eventRegistry.get(element);
  if (registeredEvents && registeredEvents[eventType]) {
    registeredEvents[eventType] = registeredEvents[eventType].filter(
      (h) => h !== eventHandler,
    );
  }

  if (eventTypeUsage[eventType] !== undefined) {
    eventTypeUsage[eventType]--;
    if (eventTypeUsage[eventType] === 0) {
      delete eventTypeUsage[eventType];
      document.removeEventListener(eventType, globalEventHandler);
    }
  }
};
