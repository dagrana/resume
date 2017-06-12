import { Injectable } from '@angular/core';

export interface CVItem {
  id: string;
  name: string;
  summary?: string;
}

const ALL_ITEMS = [
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'education', name: 'Education' }
];


@Injectable()
export class CurriculumItems {

  getAllItems(): CVItem[] {
    return ALL_ITEMS;
  }

  getItemById(id: string): CVItem {
    return ALL_ITEMS.find(i => i.id === id);
  }
}
