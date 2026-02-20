import { User, AuthResponse, LoginCredentials, RegisterCredentials } from '../types';

const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'user',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?img=2'
  }
];

const TOKEN_KEY = 'appointo_token';
const USER_KEY = 'appointo_user';

export const mockAuth = {
  // Simulate login
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const user = MOCK_USERS.find(u => u.email === credentials.email);
    
    if (!user || credentials.password !== 'password') {
      throw new Error('Invalid email or password');
    }
    
    const token = `mock-jwt-token-${user.id}`;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    
    return { user, token };
  },

  // Simulate registration
  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (credentials.password !== credentials.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    
    const newUser: User = {
      id: `${MOCK_USERS.length + 1}`,
      email: credentials.email,
      name: credentials.name,
      role: 'user'
    };
    
    const token = `mock-jwt-token-${newUser.id}`;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    
    return { user: newUser, token };
  },

  // Simulate logout
  logout: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  // Get current user
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  // Get token
  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  }
};