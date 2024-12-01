import { useEffect, useState } from "react";
import axios from "axios";
import Constants from "../../constants/constants.js";

const useGetData = () => {
    const [data, setData] = useState([]);
    
        const fetchData = async (page=1,limit=5) => {
          console.log("pageNumber=",page)
          let url=`${Constants.BASE_URL}?_page=${page}&_limit=${limit}`;
            try {
                const { data: responseData } = await axios.get(url);
                setData(responseData?.length > 0 ? [...data,...responseData] : []);
            } catch (error) {
                console.log("fetch_error", error);
                setData([]);
            }
        };

    return {fetchData,data};
};

export default useGetData;