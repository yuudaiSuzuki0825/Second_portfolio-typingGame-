@extends('layouts.app')

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
                <div class="form-group">
                    <label for="title">タイトル</label>
                    <input type="text" name="title" id="title" placeholder="こちらは日本語入力ができます。">
                </div>
                <div class="form-group">
                    <label for="body">本文</label>
                    <textarea name="body" id="body" cols="30" rows="8" placeholder="半角英数字のみ受け付けます。コロンや半角スペースも受け付けません。"></textarea>
                </div>
                <div class="form-group" id="createButton">
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

        <div class="typingTable">
            <h2>Let's Challenge!!</h2>
            <h3><i class="fa-solid fa-triangle-exclamation"></i>caution<i class="fa-solid fa-triangle-exclamation"></i></h3>
            <ul>
                <li><i class="fa-solid fa-comment"></i>タイトルと本文が表示されます。本文をタイプして下さい。</li>
                <li><i class="fa-solid fa-comment"></i>startを押すと直ぐに始まります。</li>
                <li><i class="fa-solid fa-comment"></i></i>再startする際は、ページをリロードして下さい。</li>
            </ul>
            <div id="startButtonParent">
                <button id="startButton"><i class="fa-solid fa-keyboard"></i>start</button>
            </div>
        </div>
        <div id="typingModalWindow" class="hidden">
            <p id="targetTitle"></p>
            <p id="target"></p>
        </div>

        <!-- マスク部分。モーダルウィンドウで必要。 -->
        <div id="mask" class="hidden"></div>

        {{-- 以下はグローバル定義して別ファイル（app.js）で扱うために記述。タイピングに使う文書をPHPからJavaScriptへ渡している。 --}}
        <script>
            window.Laravel = {};
            window.Laravel.texts = @json($texts);
        </script>
    @endguest
@endsection
