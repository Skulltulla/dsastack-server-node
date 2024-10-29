import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable(
    "users",
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        username: text().notNull().unique(),
    },
);
