import { NextRequest, NextResponse } from 'next/server';
import { getTasks } from '@/lib/tasks';
import { todoService } from '@/services/todoService';
import { ApiResponse } from '@/types/api-todo';

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const searchParams = request.nextUrl.searchParams;
  const limitParam = searchParams.get('limit');
  const skipParam = searchParams.get('skip');

  const limit = limitParam ? parseInt(limitParam, 10) : 10;
  const skip = skipParam ? parseInt(skipParam, 10) : 0;

  try {
    const result = await getTasks({ limit, skip });
    const latencyMs = Date.now() - startTime;

    const responsePayload: ApiResponse = {
      success: true,
      message: 'Koneksi ke DummyJSON API berhasil! Data berhasil diambil.',
      count: result.tasks.length,
      total: result.total,
      data: {
        ...result,
        latency: `${latencyMs}ms`,
        sourceEndpoint: 'https://dummyjson.com/todos',
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    const latencyMs = Date.now() - startTime;
    console.error('[API Route /api/todos] Error:', error);

    const errorPayload: ApiResponse = {
      success: false,
      message: 'Gagal terhubung ke DummyJSON API.',
      error: (error as Error).message || 'Internal Server Error',
      timestamp: new Date().toISOString(),
      data: {
        latency: `${latencyMs}ms`,
      },
    };

    return NextResponse.json(errorPayload, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.todo || typeof body.todo !== 'string') {
      return NextResponse.json(
        {
          success: false,
          message: 'Field "todo" wajib diisi dengan string.',
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    const newTodo = await todoService.createTodo({
      todo: body.todo,
      completed: Boolean(body.completed),
      userId: Number(body.userId) || 1,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Berhasil membuat todo baru melalui DummyJSON API (Simulasi)!',
        data: newTodo,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat todo di DummyJSON API.',
        error: (error as Error).message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}