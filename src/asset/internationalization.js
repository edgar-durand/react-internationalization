const IE_DEFAULT = 'en-US';//Solo para Internet EXPlorer
// const SERVER = 'http://localhost:8000/';
const i18n = {
    "en-US": {
        "title": "Hello buddy",
        "load": "Loading language",
        "section": "this is for user {name}  age {age}",
        "smallTxt": "This could be a pretty long paragraph with an odd content... and so much other things such as numbers {number} and so...etc. ",
        "lngBTN":
            {
                "btnES": "Spanish",
                "btnEN": "English"
            },
        "lngErr": "Can't find {lng} language module.",
        "react": "Learn React"
    },
    "es-ES":
        {
            "title": "Hola socio",
            "load": "Cargando idioma",
            "section": "esto es para el usuario {name} edad {age}",
            "smallTxt": "Esto podria ser un parafo bien extenso con contenido raro... y muchas otras cosas como numeros {number} y demas...etc. ",
            "lngBTN":
                {
                    "btnES": "Espaniol",
                    "btnEN": "Ingles"
                },
            "lngErr": "No se encuentra el modulo del idioma {lng}",
            "react": "Aprende React"
        },
};
/**
 *
 * @param {string} element
 * @param {string} params
 * @return {Promise}
 */
// export async function getLanguage() {
//     store.dispatch({type: 'SET_LANG', lng: i18n[sessionStorage.getItem('lang') ?? IE_DEFAULT]});
//     sessionStorage.setItem('load', i18n[sessionStorage.getItem('lang') ?? IE_DEFAULT].load);
//
//     // si usaras un api
//     // await (await fetch(`${SERVER}api/language/${sessionStorage.getItem('lang') ?? (navigator.language || IE_DEFAULT)}`))
//     //     .json()
//     //     .then(({response: i18n}) => {
//     //         store.dispatch({type: 'SET_LANG', lng: i18n});
//     //         sessionStorage.setItem('load', i18n.load);
//     //     });
// }

export const _Language = (element, params = 'key:value,otherKey:otherValue,etc') => {
    let currentMatch = i18n[sessionStorage.getItem('lang') ?? IE_DEFAULT];

    element.split('.').forEach(value => {
        if (value in currentMatch) currentMatch = currentMatch[value];
    });


    params &&
    params.split(',').forEach(param => {
        const EXP = /\b(.*[^:]):(.*)\b/;
        if (!EXP.test(param)) return ;
        // eslint-disable-next-line
        const [_, key, value] = EXP.exec(param);
        currentMatch = currentMatch.includes(`{${key}}`) ? currentMatch.replace(`{${key}}`, value) : currentMatch;
    });

    return currentMatch;
};


// const translate = async (locale) => await import(`./locale/${locale}.js`)
//     .then(() => sessionStorage.setItem('lang', locale))
//     .catch(() => _ErrorLogs('lngErr', `lng:${locale}`));










