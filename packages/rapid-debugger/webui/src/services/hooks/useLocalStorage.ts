import {useState} from "react";

export default function useLocalStorage<T>(key: string) {
	const [item, setItem] = useState<T | undefined>(localStorage.getItem(key) as T | undefined)
	
	return {
		item: item,
		removeItem: () => localStorage.removeItem(key),
		setItem: (value: T ) => {
			setItem(value)
			localStorage.setItem(key, value as string)
		}
	}
}