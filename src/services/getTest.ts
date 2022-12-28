import React from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/";

export const getTesteData = axios.get(url).then((res) => res);
