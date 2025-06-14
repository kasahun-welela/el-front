export interface Course {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  creator?: {
    _id: string;
    name: string;
    email: string;
  };
  difficulty_level: string;
  status: string;
  duration_months: number;
  course_type: string;
  delivery_method: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
 
} 

export interface CreateCourse {
  title: string;
  description: string;
  thumbnail: string;
  logo_url: string;
  price: number;
  difficulty_level: string;
  status: string;
  duration_months: number;
  course_type: string;
  delivery_method: string;
} 

export interface CreatePhase {
  course: string;
  phaseTitle: string;
  displayTitle: string;
  description: string;
  phaseOrder: number;
  phaseIcon: File;
} 

export interface CreateWeek {
  phase: string;
  title: string;
  group_session: string;
  live_session: string;
  order_number: number;
}

export interface Phase {
  _id: string;
  title: string;
  description: string;
  phaseOrder: number;
  phaseIcon: string;
}

export interface GroupSession {
  _id: string;
  name: string;
}

export interface LiveSession {
  _id: string;
  title: string;
}

export interface GetLiveSession {
  _id: string;
  title: string;
  description: string;
  session_date: string;
  start_time: string;
  end_time: string;
  meeting_link: string;
  session_type: string;
  is_active: boolean;
  status: string;
  week: {
    title: string;
    phase: {
      title: string;
      course: {
        title: string;
      };
    };
  };
  batch: {
    name: string;
  };
  instructor: {
    name: string;
    email: string;
  };
}

export interface ChangePassword {
  currentPassword: string;
  newPassword: string;
}
