import fs from "fs";
import path from "path";
import { PGlite } from "@electric-sql/pglite";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

describe("user", async () => {
	const db = new PGlite();

	beforeEach(async () => {
		// データベースへの ping (接続テスト)
		await db.exec("SELECT 1");
		console.log("Connected to the database");

		// ファイルを読み込んでSQL文を取得, スキーマの初期化
		const sqlFilePath = path.resolve(__dirname, "./migrations/schema.sql");
		const schemaSQL = fs.readFileSync(sqlFilePath, "utf-8");
		await db.exec(schemaSQL);
		console.log("Schema initialized");
	});

	afterEach(async () => {});

	test("create", async () => {
		const tables = await db.exec(
			"select table_name from information_schema.tables where table_schema = 'public'",
		);
		console.log("tables", JSON.stringify(tables, null, 2));
		await db.exec(
			`insert into "user" (id, username, email) values ('1', 'test', 'test@example.com')`,
		);
		const result = await db.exec("select * from user");
		console.log(result);
	});
});
