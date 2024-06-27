// export const base_url = "https://electronics-backend-jhe8.onrender.com/";
export const base_url = "http://localhost:5000/";
interface ApiResponse {
    message: string;
    success: string;
}
export const getData = async (endpoint: string) => {
    try {
        const response = await fetch(base_url + 'api/v1/' + endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const postDataWithToken = async <T, R>(
    endpoint: string,
    data: T
): Promise<R> => {
    const response = await fetch(`${base_url}api/v1/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const responseData: R = await response.json();
    return responseData;
};
export const formDataWithToken = async (
    endpoint: string,
    formData: FormData
): Promise<ApiResponse> => {
    const response = await fetch(`${base_url}api/v1/${endpoint}`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
};
export const delete_data = async (endpoint: string) => {
    const response = await fetch(`${base_url}api/v1/${endpoint}`, {
        method: 'DELETE'
    });
    const responseData = await response.json();
    return responseData;

}