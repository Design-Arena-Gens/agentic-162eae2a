import { NextResponse } from 'next/server';

export async function GET() {
  // Mock email data
  const mockEmails = [
    {
      id: '1',
      from: 'john.doe@example.com',
      subject: 'Welcome to Email Connector',
      snippet: 'Thank you for connecting your email. This is a sample message to demonstrate the email viewer functionality.',
      date: '2 hours ago',
    },
    {
      id: '2',
      from: 'notifications@service.com',
      subject: 'Your daily digest',
      snippet: 'Here is your daily summary of activities and updates from your connected services.',
      date: '5 hours ago',
    },
    {
      id: '3',
      from: 'team@company.com',
      subject: 'Meeting reminder',
      snippet: 'Don\'t forget about our team meeting scheduled for tomorrow at 2 PM.',
      date: '1 day ago',
    },
    {
      id: '4',
      from: 'newsletter@tech.com',
      subject: 'Latest Tech News',
      snippet: 'Stay updated with the latest developments in technology and innovation.',
      date: '2 days ago',
    },
  ];

  return NextResponse.json({
    success: true,
    emails: mockEmails,
  });
}
