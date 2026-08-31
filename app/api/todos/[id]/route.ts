import { NextRequest, NextResponse } from 'next/server';
import { getTaskById } from '@/lib/tasks';
import { ApiResponse } from '@/types/api-todo';

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;

  try {
    const task = await getTaskById(id);

    if (!task) {
      const notFoundPayload: ApiResponse = {
        success: false,
        message: `Task dengan ID ${id} tidak ditemukan di DummyJSON.`,
        timestamp: new Date().toISOString(),
      };
      return NextResponse.json(notFoundPayload, { status: 404 });
    }

    const successPayload: ApiResponse = {
      success: true,
      message: `Detail Task ID ${id} berhasil diambil.`,
      data: task,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(successPayload, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: `Gagal mengambil Task ID ${id}.`,
        error: (error as Error).message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}