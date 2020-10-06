export interface Item {
  itemId: number
  itemName: string
  backgroundColor: string
  color: string
}

export interface ItemClass {
  itemClassItemName: string
  items: Item[]
}

export interface AccordionItemClass {
  itemClassName: string
  itemClassItems: ItemClass[]
}
