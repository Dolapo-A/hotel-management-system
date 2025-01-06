/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getBookedDatesByRoomId } from "../../services/apiBookings";

export function useBookedDates(roomId) {
	const {
		isLoading,
		data: bookedDates,
		error,
	} = useQuery({
		queryKey: ["bookedDates", roomId],
		queryFn: () => getBookedDatesByRoomId(roomId),
		refetchInterval: 30000,
		refetchOnWindowFocus: true,
		staleTime: 10000,
	});

	return { isLoading, bookedDates, error };
}
