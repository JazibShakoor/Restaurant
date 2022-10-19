
type Api = {
    id: string, name: string; image: string, discount?: number
};

const useUpdateApi = () => {
    const UpdateData = async (data: Api[]) => {
        const response = await fetch(
            `https://react-http-86b84-default-rtdb.firebaseio.com/restaurant.json`,
            {
                method: "PATCH",
                body: JSON.stringify({
                    meals: data,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        await response.json();
    };
    return { UpdateData };
};

export default useUpdateApi;