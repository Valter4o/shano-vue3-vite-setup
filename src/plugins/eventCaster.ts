interface Caster {
  events: {}
  options: any
  cast: (eventName: string) => void
  on: (eventName: string, cb: Function, options: any) => void
  once: (eventName: string, cb: Function) => void
  off: (eventName: string) => void
  offAll: () => void
  removeListener: (eventName: string) => void
  removeAllListeners: () => void
  eventNames: () => string[]
  clearSubs: (eventName: string) => void
}

function cast(eventName: string): void {
  if (this.hasOwnProperty(eventName)) {
    const subs = this.events[eventName].subs
    for (let i = 0; i < subs.length; i++) {
      const sub = subs[i]
      sub.cb()
      if (sub.once) {
        this.events[eventName].subs = [
          ...subs.slice(0, 1),
          ...subs.slice(i + 1),
        ]
      }
    }
  } else {
    throw new Error("Emitter error: There is no such event registered")
  }
}

function on(eventName: string, cb: Function, options: any): void {
  if (this.hasOwnProperty(eventName)) {
    this.events[eventName].subs.push({ cb })
  } else {
    this.events[eventName] = {
      subs: [{ cb: cb }],
    }
  }
}

function once(eventName: string, cb: Function) {
  if (this.hasOwnProperty(eventName)) {
    this.events[eventName].subs.push({ cb, once: true })
  } else {
    this.events[eventName] = {
      subs: [{ cb: cb, once: true }],
    }
  }
}

function eventNames(): string[] {
  return Object.keys(this.events)
}

function off(eventName: string) {
  if (this.events.hasOwnProperty(eventName)) {
    delete this.events[eventName]
  }
}

function offAll() {
  const events = Object.keys(this.events)
  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    delete this.events[event]
  }
}

function removeListener(eventName: string) {
  this.off(eventName)
}

function removeAllListeners() {
  this.offAll()
}

function clearSubs(eventName: string) {
  this.events[eventName].length = 0
}

const caster: Caster = {
  events: {},
  options: {},
  cast,
  on,
  once,
  off,
  offAll,
  removeListener,
  removeAllListeners,
  eventNames,
  clearSubs,
}

export default {
  EventEmitter: {
    set: (app) => {
      app.provide("v-caster", caster)
    },
  },
}
