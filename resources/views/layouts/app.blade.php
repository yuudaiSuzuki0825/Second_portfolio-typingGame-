<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token  ➡消さないこと。 -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>onlymytyping</title>

    <!-- Styles -->
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <header>
        <nav>
            <div class="wrapper">
                <h1>
                    <a href="{{ url('/') }}">
                    <!-- {{ config('app.name', 'Laravel') }} -->
                        onlymytyping
                    </a>
                </h1>

                <div class="headerSiteMenu">
                    <ul>
                        <!-- ログイン前の状態は以下に。 -->
                        @guest
                            @if (Route::has('login'))
                                <li>
                                    <a href="{{ route('login') }}"><i class="fa-solid fa-arrow-right-to-bracket"></i>ログイン</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li>
                                    <a href="{{ route('register') }}"><i class="fa-regular fa-address-card"></i>新規登録</a>
                                </li>
                            @endif
                        <!-- ログイン後の状態は以下に。 -->
                        @else
                                <li>
                                    <a href="{{ route('home') }}" role="button">
                                        <i class="fa-solid fa-user"></i>{{ Auth::user()->name }}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('text.deleteList') }}">
                                        <i class="fa-solid fa-bars-staggered"></i>最近削除した項目
                                    </a>
                                </li>
                                <li>
                                    <!-- ログアウト。 -->
                                    <div>
                                        <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                            <i class="fa-solid fa-arrow-right-from-bracket"></i>ログアウト
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>
        @yield('content')
    </main>

    <script src="https://kit.fontawesome.com/efd87fdfef.js" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
