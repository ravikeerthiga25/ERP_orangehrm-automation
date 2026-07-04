const axios = require("axios");



class UserAPI {
  async getUsers() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (response.status !== 200 || !Array.isArray(response.data)) {
      throw new Error('Failed to fetch users or invalid response');
    }
    return response;
  }

  async getUserById(id) {
    if (!id) throw new Error('User ID is required');
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.status !== 200 || !response.data) {
      throw new Error('User not found');
    }
    return response.data;
  }

  async createUser(user) {
    if (!user || !user.name || !user.email) {
      throw new Error('User object with name and email required');
    }
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
    if (response.status !== 201 || !response.data) {
      throw new Error('Failed to create user');
    }
    return response.data;
  }

  async updateUser(id, user) {
    if (!id || !user) throw new Error('User ID and update data required');
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
    if (response.status !== 200 || !response.data) {
      throw new Error('Failed to update user');
    }
    return response.data;
  }

  async deleteUser(id) {
    if (!id) throw new Error('User ID is required');
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.status !== 200) {
      throw new Error('Failed to delete user');
    }
    return { success: true };
  }
}

module.exports = { UserAPI };
