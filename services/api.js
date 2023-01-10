import client from './client';


const api = {

    consultaLibros: async () => {
        return await client.GET('/api/books');
    },

    agregarLibros: async (body) => {
        return await client.POST('/api/books', body);
    },

    eliminarLibros: async (id) => {
        return await client.DELETE('/api/books/' + id);
    },

}

export default api;