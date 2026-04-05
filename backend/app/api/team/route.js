import { NextResponse } from 'next/server';

// Mock team members data
const teamMembers = [
  {
    id: 1,
    name: 'Raj Kumar',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in tech industry. Expert in strategy and business development.',
    avatar: '[Avatar 1]',
    email: 'raj.kumar@shivratech.com',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack architect with expertise in cloud infrastructure and distributed systems.',
    avatar: '[Avatar 2]',
    email: 'priya.sharma@shivratech.com',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 3,
    name: 'Arjun Patel',
    role: 'Lead AI/ML Engineer',
    bio: 'Machine learning specialist with Ph.D. in Computer Science. Published researcher in AI.',
    avatar: '[Avatar 3]',
    email: 'arjun.patel@shivratech.com',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 4,
    name: 'Sarah Chen',
    role: 'Senior Frontend Developer',
    bio: 'Expert in React and modern web technologies. UX enthusiast and design systems architect.',
    avatar: '[Avatar 4]',
    email: 'sarah.chen@shivratech.com',
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 5,
    name: 'Mike Johnson',
    role: 'Mobile Lead',
    bio: 'Android specialist with 8+ years experience building apps used by millions.',
    avatar: '[Avatar 5]',
    email: 'mike.johnson@shivratech.com',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 6,
    name: 'Emily Rodriguez',
    role: 'DevOps & Infrastructure',
    bio: 'Cloud infrastructure specialist. AWS certified with expertise in CI/CD and monitoring.',
    avatar: '[Avatar 6]',
    email: 'emily.rodriguez@shivratech.com',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 7,
    name: 'David Wong',
    role: 'QA Lead',
    bio: 'Quality assurance expert ensuring excellence in every deliverable. Test automation specialist.',
    avatar: '[Avatar 7]',
    email: 'david.wong@shivratech.com',
    socials: { linkedin: '#' },
  },
  {
    id: 8,
    name: 'Lisa Martinez',
    role: 'Project Manager',
    bio: 'Expert in agile methodologies and client communication. Ensures on-time, on-budget delivery.',
    avatar: '[Avatar 8]',
    email: 'lisa.martinez@shivratech.com',
    socials: { linkedin: '#' },
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const role = searchParams.get('role');

    // Get specific team member
    if (id) {
      const member = teamMembers.find(m => m.id === parseInt(id));
      if (!member) {
        return NextResponse.json(
          { error: 'Team member not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: member }, { status: 200 });
    }

    // Filter by role
    if (role) {
      const filtered = teamMembers.filter(m => m.role.toLowerCase().includes(role.toLowerCase()));
      return NextResponse.json(
        { success: true, data: filtered, count: filtered.length },
        { status: 200 }
      );
    }

    // Get all team members
    return NextResponse.json(
      { success: true, data: teamMembers, count: teamMembers.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching team members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
}
