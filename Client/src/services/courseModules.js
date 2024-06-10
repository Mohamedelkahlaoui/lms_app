import axios from 'axios';
import { getAuthHeader } from './config';
import { baseURL as coursesURL } from './courses';

const baseURL = '/modules';

const getModulesURL = (courseId, moduleId) => {
  if (!moduleId) return `${coursesURL}/${courseId}${baseURL}`;
  return `${coursesURL}/${courseId}${baseURL}/${moduleId}`;
};

const getModuleItemsURL = (courseId, moduleId, moduleItemId) => {
  if (!moduleItemId)
    return `${coursesURL}/${courseId}${baseURL}/${moduleId}/module-item`;
  return `${coursesURL}/${courseId}${baseURL}/${moduleId}/module-item/${moduleItemId}`;
};

const getAllModules = async (courseId) => {
  const response = await axios.get(getModulesURL(courseId));
  return response.data.modules;
};

const createModule = async (courseId, module) => {
  try {
    const response = await axios.post(
      getModulesURL(courseId),
      module,
      getAuthHeader()
    );
    return response.data.modules;
  } catch (error) {
    console.error('Error creating module:', error.response || error.message);
    throw error;
  }
};

const updateModule = async (courseId, moduleId, module) => {
  try {
    const response = await axios.put(
      getModulesURL(courseId, moduleId),
      module,
      getAuthHeader()
    );
    return response.data.modules;
  } catch (error) {
    console.error('Error updating module:', error.response || error.message);
    throw error;
  }
};

const deleteModule = async (courseId, moduleId) => {
  try {
    const response = await axios.delete(
      getModulesURL(courseId, moduleId),
      getAuthHeader()
    );
    return response.data.modules;
  } catch (error) {
    console.error('Error deleting module:', error.response || error.message);
    throw error;
  }
};

const createModuleItem = async (courseId, moduleId, moduleItem) => {
  try {
    const response = await axios.post(
      getModuleItemsURL(courseId, moduleId),
      moduleItem,
      getAuthHeader()
    );
    return response.data.modules;
  } catch (error) {
    console.error('Error creating module item:', error.response || error.message);
    throw error;
  }
};

const deleteModuleItem = async (courseId, moduleId, moduleItemId) => {
  try {
    const response = await axios.delete(
      getModuleItemsURL(courseId, moduleId, moduleItemId),
      getAuthHeader()
    );
    return response.data.modules;
  } catch (error) {
    console.error('Error deleting module item:', error.response || error.message);
    throw error;
  }
};

const moduleService = {
  getAllModules,
  createModule,
  updateModule,
  deleteModule,
  createModuleItem,
  deleteModuleItem,
};
export default moduleService;
