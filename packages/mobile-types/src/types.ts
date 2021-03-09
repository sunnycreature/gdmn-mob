export interface IDocument {
  id: number;
  head: IHead;
  lines: ILine[];
}

export interface IHead {
  docnumber: string;
  doctype: number;
  fromcontactId: number;
  tocontactId: number;
  date: string;
  status: number;
}

export interface ILine {
  id: number;
  goodId: number;
  quantity: number;
  price?: number;
  remains?: number;
}

export interface IField {
  id: string;
  value: string;
}

export interface IListItem {
  id?: number;
  value?: string;
  [key: string]: unknown;
}

export interface IFormParams {
  contact?: number[];
  dateBegin?: string;
  dateEnd?: string;
}

export interface IDocumentParams {
  status: number;
  date?: string;
  tocontactId?: number;
  fromcontactId?: number;
  doctype?: number;
  docnumber?: string;
}

export interface IFilterParams {
  fieldSearch: string[];
}

export interface IDocumentStatus {
  id: number;
  name: string;
}
