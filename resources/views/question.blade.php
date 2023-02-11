@extends('layouts.app3')

@section('content')
    @guest
        @if (Route::has('login'))
        <ul>
            <li>
                <a href="{{ route('login') }}">ログイン</a>
            </li>
        @endif

        @if (Route::has('register'))
            <li>
                <a href="{{ route('register') }}">新規登録</a>
            </li>
        @endif
        </ul>
    <!-- ログイン後の状態は以下に。 -->
    @else
        <input type="checkbox" id="checkbox" checked>
        <label for="checkbox" id="checkboxLabel">
            <i class="fa-solid fa-angles-left"></i>
        </label>
        <aside id="sideBar">
            <h2>文書作成</h2>
            <form action="{{ route('text.store') }}" method="post">
                @csrf
                <div>
                    <label for="title">タイトル</label>
                    <input type="text" name="title" id="title" placeholder="こちらは日本語入力ができます。">
                </div>
                <div>
                    <label for="body">本文</label>
                    <textarea name="body" id="body" cols="30" rows="8" placeholder="半角英数字のみ受け付けます。コロンや半角スペースも受け付けません。"></textarea>
                </div>
                <div id="createButton">
                    <button type="submit">作成
                    </button>
                </div>
            </form>
        </aside>
        @if ($errors)
            @foreach ($errors->all() as $error)
            <p id="errorMsg">{{ $error }}</p>
            @endforeach
        @endif
        @if (session('ok'))
            <p id="successMeg">{{ session('ok') }}</p>
        @endif

        <table class="List questionList">
            <thead>
                <tr>
                    <td><i class="fa-regular fa-circle-question"></i> Q&A</td>
                </tr>
            </thead>
            @foreach ($question as $k => $v)
            <tbody>
                <tr class="tr">
                    <td>{{ $k }}</td>
                    <td><i class="fa-solid fa-chevron-down"></i></td>
                </tr>
                <tr id="tableTargetBody">
                    <td>{{ $v }}</td>
                </tr>
            </tbody>
            @endforeach
        </table>
    @endguest
@endsection
