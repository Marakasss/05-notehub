export type Tag = "Work" | "Personal" | "Meeting" | "Shooping" | "Todo";

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: Tag;
}
