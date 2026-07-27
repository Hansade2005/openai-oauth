export {
	type BrowserSessionOptions,
	type BrowserSessionStoreOptions,
	createSessionStore,
	getSession,
	type OpenAIAuthHeaders,
	type OpenAIAuthHeadersOptions,
	openaiAuthHeaders,
} from "@openai-oauth/web"
export {
	SignInWithChatGPT,
	type SignInWithChatGPTProps,
	SignInWithDeepSeek,
	SignInWithGemini,
	type SignInWithProviderProps,
} from "./SignInWithChatGPT.js"
export type {
	OpenAIOAuthSession,
	SessionStore,
	SignInWithChatGPTError,
	SignInWithChatGPTState,
} from "./types.js"
export {
	type AuthPlatform,
	type AuthProvider,
	type SignInWithChatGPTOpenMode,
	type UseSignInWithChatGPTOptions,
	type UseSignInWithChatGPTReturn,
	type UseSignInWithProviderOptions,
	useSignInWithChatGPT,
	useSignInWithDeepSeek,
	useSignInWithGemini,
} from "./useSignInWithChatGPT.js"
