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
        @if ($errors->any())
            <ul id="errorMsg"><i class="fa-solid fa-triangle-exclamation"></i><br><br>Error!<br>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        @endif
        @if (session()->has('ok'))
            <div id="successMeg"><i class="fa-regular fa-circle-check"></i><br><br>Good job!<br>{{ session('ok') }}</div>
        @endif

        <div class="typingTable">
            <h2>Let's Challenge!!</h2>
            <div id="startButtonParent">
                <button id="startButton"><i class="fa-regular fa-circle-play"></i></button>
            </div>
            <div>
                <button id="questionButton"><i class="fa-regular fa-circle-question"></i></button>
            </div>
            <div>
                <a id="deleteListButton" href="{{ route('text.deleteList') }}"><i class="fa-solid fa-bars-staggered"></i></a>
            </div>
            <div>
                <a id="topPageButton" href="{{ route('home') }}"><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
        <div id="typingModalWindow" class="hidden">
            <p id="targetTitle"></p>
            <p id="target"></p>
        </div>

        @if (count($texts) > 0)
            <table class="List">
                <thead>
                    <tr>
                        <td><i class="fa-solid fa-list"></i> 文書一覧</td>
                    </tr>
                </thead>
                @foreach ($texts as $text)
                <tbody>
                    <tr class="tr">
                        <td>
                            <form action="{{ route('text.destroy', $text) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit"><i class="fa-solid fa-trash" id="trashButton"></i></button>
                            </form>
                        </td>
                        <td></td>
                        <td>{{ $text->title }}</td>
                        <td><i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr id="tableTargetBody">
                        <td>{{ $text->body }}</td>
                    </tr>
                </tbody>
                @endforeach
            </table>
        @else
        <p class="zeroText">文書がありません。</p>
        @endif

        <!-- マスク部分。モーダルウィンドウで必要。 -->
        <div id="mask" class="hidden"></div>

        {{-- 以下はグローバル定義して別ファイル（app.js）で扱うために記述。タイピングに使う文書をPHPからJavaScriptへ渡している。 --}}
        <script>
            window.Laravel = {};
            window.Laravel.texts = @json($texts);
        </script>
    @endguest
@endsection
