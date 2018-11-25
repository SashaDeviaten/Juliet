import {default as isoFetch} from 'isomorphic-fetch';


const uniFetch = options => {

    const fetchOptions = {...options.fetchOptions};


    isoFetch('https://fe.it-academy.by/AjaxStringStorage2.php', fetchOptions)
        .then(function (response) {
            if (!response.ok) {
                let Err = new Error("fetch error " + response.status);
                Err.userMessage = "Ошибка связи";
                throw Err;
            } else {
                return response.text()
            }
        })
        .then(function (data) {
            if (data) {
                    data = JSON.parse(data);

                try {
                    options.cbGetData(data);
                }
                catch (error) {
                    console.error(error);

                    options.cbError(error.message);
                }
            }
        })
        .catch(function (error) {
            // fetchError(error.userMessage || error.message);
            console.log(error)
        })
    ;
};

const fetchPromise = options => new Promise((resolve, reject) => uniFetch({
    ...options,
    cbError: data => reject(data),
    cbGetData: data => resolve(data),
}));

export {fetchPromise};