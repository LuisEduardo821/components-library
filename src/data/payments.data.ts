import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import { v4 as uuidv4 } from "uuid";

const config: Config = {
  dictionaries: [names],
};

export type Payment = {
  id: string;
  amount: number; //$100.00
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  clientName: string;
};

const randomStatus = () => {
  const statuses = ["pending", "processing", "success", "failed"] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const randomEmail = (clientName: string) => {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${clientName}@${randomDomain}`;
};

export const payments: Payment[] = Array.from({ length: 100 }, () => {
  const randomName = uniqueNamesGenerator(config);

  return {
    id: uuidv4(),
    amount: Math.floor(Math.random() * 10000) / 100,
    status: randomStatus(),
    email: randomEmail(randomName.toLowerCase()),
    clientName: randomName,
  };
});
