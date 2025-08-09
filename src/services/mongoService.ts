// MongoDB API Service
// This will connect to your MongoDB backend when deployed

export interface FormSubmission {
  _id?: string;
  type: 'plagiarism-report' | 'plagiarism-removal' | 'ai-report' | 'drillbit-report';
  email: string;
  file?: File;
  fileName?: string;
  fileSize?: number;
  submittedAt: Date;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  captchaToken: string;
  additionalData?: any;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class MongoService {
  private baseUrl: string;

  constructor() {
    // Replace with your actual MongoDB API URL when deploying
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  async submitForm(formData: Omit<FormSubmission, '_id' | 'submittedAt' | 'status'>): Promise<ApiResponse<FormSubmission>> {
    try {
      const submitData = {
        ...formData,
        submittedAt: new Date(),
        status: 'pending'
      };

      const response = await fetch(`${this.baseUrl}/forms/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result.data,
        message: result.message || 'Form submitted successfully'
      };
    } catch (error) {
      console.error('Form submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  async uploadFile(file: File, formType: string): Promise<ApiResponse<{ fileUrl: string; fileName: string }>> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('formType', formType);

      const response = await fetch(`${this.baseUrl}/files/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result.data,
        message: 'File uploaded successfully'
      };
    } catch (error) {
      console.error('File upload error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'File upload failed'
      };
    }
  }

  async getSubmission(id: string): Promise<ApiResponse<FormSubmission>> {
    try {
      const response = await fetch(`${this.baseUrl}/forms/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result.data
      };
    } catch (error) {
      console.error('Get submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch submission'
      };
    }
  }

  async getUserSubmissions(email: string): Promise<ApiResponse<FormSubmission[]>> {
    try {
      const response = await fetch(`${this.baseUrl}/forms/user/${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result.data
      };
    } catch (error) {
      console.error('Get user submissions error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch submissions'
      };
    }
  }
}

export const mongoService = new MongoService();