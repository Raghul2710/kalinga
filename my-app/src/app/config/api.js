// Global API Configuration
export const API_CONFIG = {
  baseURL: 'https://kalinga.dupebox.com/api',
  
  // Course endpoints
  courses: {
    list: () => `/courses/`,
    completeDetail: (courseId) => `/courses/${courseId}/complete-detail/`,
  },
  
  // Department endpoints
  departments: {
    list: () => `/departments/`,
    completeDetail: (departmentId) => `/departments/${departmentId}/complete-detail/`,
    courses: (slugOrId) => `/departments/${slugOrId}/courses/`,
    urlInfo: (slugOrId) => `/departments/${slugOrId}/url-info/`,
    allDepartmentsCourses: (programType = null, department = null) => {
      const base = `/departments/all-departments-courses/`;
      const params = [];
      if (programType) params.push(`program_type=${programType}`);
      if (department) params.push(`department=${department}`);
      return params.length > 0 ? `${base}?${params.join('&')}` : base;
    },
    courseCounts: () => `/departments/course-counts/`,
    updateCourseCount: () => `/departments/course-counts/update/`,
  },
  
  // Optimized endpoints
  departmentCourses: {
    list: () => `/department-courses/`,
    departmentsCourses: () => `/departments-courses/`,
  },
  
  // Add other API endpoints here as needed
};

// Helper function to build full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};
