// src/types/Article.ts

interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string | null;
  crop_name:string
}

export interface NyTimesProps {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  pub_date: string;
  multimedia?: Multimedia[];
  byline?: {
    original: string;
    //   person: Array<{
    //     firstname: string;
    //     middlename?: string;
    //     lastname: string;
    //     qualifier?: string;
    //     title?: string;
    //     role?: string;
    //     organization?: string;
    //     rank?: number;
    //   }>;
  };
  headline?: {
    main: string;
    print_headline?: string;
  };

  document_type: string;
  news_desk?: string;
  section_name?: string;
  subsection_name?: string;
  type_of_material?: string;
  word_count?: number;
  uri: string;
}
