export interface CardListProps {
  data: CardProps[];
}
export interface BigCardProps {
  info: CardProps; // Expecting info to be of type CardProps
}

export interface CardProps {
  JobTitle: string;
  CompanyName: string;
  Location: string;
  JobType: string;
  Description: string;
  Requirements: string[];
}
