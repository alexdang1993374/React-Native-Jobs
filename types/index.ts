export interface IItem {
  job_id: string;
  employer_logo: string;
  employer_name: string;
  job_title: string;
  job_country: string;
  job_employment_type: string;
}

export type TJobType = "Full-time" | "Part-time" | "Contractor";
