export interface CardListProps {
  data: CardProps[];
}

export interface CardProps {
  JobTitle: string;
  CompanyName: string;
  Location: string;
  JobType: string;
  Description: string;
  Requirements: string[];
}
