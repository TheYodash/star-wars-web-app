import * as React from 'react';

const useFetch = (url) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchData(url);
        }, []);
    
    return { data, loading, error };

}


export default useFetch;