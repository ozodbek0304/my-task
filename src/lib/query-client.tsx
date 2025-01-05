import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: import.meta.env.MODE === "development" ? 0 : 3,
            refetchOnMount: false,
        },
    },
})
