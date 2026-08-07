export interface UserProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  learningStreakDays: number;
  totalLearningHours: number;
  completedRoadmaps: number;
  peerConnectionsCount: number;
}

export interface AnalyticsMetric {
  id: string;
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  iconName: string;
  color: 'purple' | 'cyan' | 'emerald' | 'amber' | 'rose';
  description: string;
}

export interface EventItem {
  id: string;
  title: string;
  speaker: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    isVerified: boolean;
  };
  date: string;
  time: string;
  category: string;
  attendeesCount: number;
  matchScore: number;
  thumbnail: string;
  isLive?: boolean;
  tags: string[];
}

export interface RecommendedTalk {
  id: string;
  title: string;
  speaker: string;
  speakerAvatar: string;
  duration: string;
  category: string;
  matchReason: string;
  rating: number;
  views: string;
  thumbnail: string;
  aiSummaryAvailable: boolean;
}

export interface LearningModule {
  id: string;
  title: string;
  duration: string;
  status: 'completed' | 'in_progress' | 'locked';
  talkTitle: string;
  score?: number;
}

export interface SkillRoadmap {
  id: string;
  title: string;
  targetRole: string;
  overallProgress: number; // 0-100
  completedModules: number;
  totalModules: number;
  skillsAcquired: string[];
  currentModule: LearningModule;
  nextMilestone: string;
}

export interface ActivityItem {
  id: string;
  type: 'talk_completed' | 'badge_earned' | 'connection_made' | 'mentor_qa' | 'roadmap_milestone';
  title: string;
  timestamp: string;
  description: string;
  meta?: string;
  avatar?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  isUnread: boolean;
  type: 'event' | 'network' | 'system' | 'ai';
}
