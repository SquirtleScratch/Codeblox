
export interface animalDataType {
    image: string;
    name: string;
    grouping: string;
    color: string;
    food: string
    label: string
  }

export interface initialDataType {
    label: string;
    image: string;
    animals: animalDataType[]
  }

export interface returnValueDataType {
    habitats: [] | initialDataType[];
    animals: [] | animalDataType[];
  }

export interface attributeObject {
    [key: string]: Set<string>;
}


export type attributeTuple = [string, Set<string>];

export type ruleValueTuple = [string[], string];

export type parsedRuleSetObject = {
  name?: string;
  grouping?: string;
  color?: string;
  food?: string;
}

