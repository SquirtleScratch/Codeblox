'use client';
import { createContext, useReducer } from 'react';

export const PositionContext = createContext(null);
export const PositionDispatchContext = createContext(null);

export function PositionProvider({ children }: any) {
  const [position, dispatch] = useReducer(positionReducer, initialPosition);

  return (
    <PositionContext.Provider value={position}>
      <PositionDispatchContext.Provider value={dispatch}>
        {children}
      </PositionDispatchContext.Provider>
    </PositionContext.Provider>
  );
}

const initialPosition = { x: 1, y: 1 };

function positionReducer(position: { x: number, y: number }, action: { type: any; }) {
  switch (action.type) {
    case "move-up": {
      position.y = position.y - 1;
      return;
    }
    case "move-down": {
      position.y = position.y + 1;
      return;
    }
    case "move-left": {
      position.x = position.x - 1;
      return;
    }
    case "move-right": {
      position.x = position.x + 1;
      return;
    }
    case "repeat": {
      return;
    }
    case "wait": {
      return;
    }
    case "mouseclick": {
      return;
    }
    default: {
      return;
    }
  }
}