import { describe, expect, test } from "vitest"
import {
	createSessionStore,
	openaiAuthHeaders,
	SignInWithChatGPT,
	SignInWithDeepSeek,
	SignInWithGemini,
	useSignInWithChatGPT,
	useSignInWithDeepSeek,
	useSignInWithGemini,
} from "../src/index.js"
import { openaiCredentials } from "../src/server.js"

describe("@openai-oauth/react public API", () => {
	test("exports the v2 React surface", () => {
		expect(SignInWithChatGPT).toBeTypeOf("function")
		expect(SignInWithGemini).toBeTypeOf("function")
		expect(SignInWithDeepSeek).toBeTypeOf("function")
		expect(useSignInWithChatGPT).toBeTypeOf("function")
		expect(useSignInWithGemini).toBeTypeOf("function")
		expect(useSignInWithDeepSeek).toBeTypeOf("function")
		expect(createSessionStore).toBeTypeOf("function")
		expect(openaiAuthHeaders).toBeTypeOf("function")
		expect(openaiCredentials).toBeTypeOf("function")
	})
})
