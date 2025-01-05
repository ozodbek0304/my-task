import { useQuery, useQueryClient } from "@tanstack/react-query"

export function useStore<T>(key: string) {
    const queryClient = useQueryClient()

    const setStore = (data: T) => {
        queryClient.setQueryData(["local" + key], data)
    }

    const { data: store } = useQuery<T>({
        queryKey: ["local" + key],
        // enabled: false,
        refetchOnMount: true,
    })

    const remove = () => {
        queryClient.removeQueries({ queryKey: ["local" + key] })
    }

    return { store, setStore, remove }
}
