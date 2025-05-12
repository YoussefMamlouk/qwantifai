import * as React from 'react';

declare global {
  namespace React {
    interface FormEvent<T = Element> extends SyntheticEvent<T> {
      target: EventTarget & T;
    }
    
    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
      target: EventTarget & T;
    }
    
    interface SyntheticEvent<T = Element, E = Event> {
      currentTarget: EventTarget & T;
      nativeEvent: E;
      preventDefault(): void;
      stopPropagation(): void;
      target: EventTarget & T;
      timeStamp: number;
      type: string;
    }
  }
} 