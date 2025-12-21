// Global API Configuration
export const API_CONFIG = {
  baseURL: 'https://kalinga.dupebox.com/api',
  
  // Course endpoints
  courses: {
    completeDetail: (courseId) => `/courses/${courseId}/complete-detail/`,
  },
  
  // Department endpoints
  departments: {
    completeDetail: (departmentId) => `/departments/${departmentId}/complete-detail/`,
    courses: (slugOrId) => `/departments/${slugOrId}/courses/`,
  },
  
  // Add other API endpoints here as needed
};

// Helper function to build full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};
