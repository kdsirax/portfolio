import axios from "axios";

async function getProjects() {
    try {
        const { data } = await axios.get(
            "https://api.codolio.com/dev/project",
            {
                params: {
                    userKey: "khushal_sirvi"
                }
            }
        );

        console.log(data);
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
}

getProjects();