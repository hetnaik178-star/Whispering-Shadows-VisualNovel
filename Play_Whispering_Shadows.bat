@echo off
title Whispering Shadows — Launcher
color 0D
cls

echo.
echo   ╔══════════════════════════════════════════════════════╗
echo   ║                                                      ║
echo   ║        W H I S P E R I N G   S H A D O W S          ║
echo   ║         Interactive Cinematic Stories                 ║
echo   ║                                                      ║
echo   ╚══════════════════════════════════════════════════════╝
echo.
echo   Choose your launch method:
echo.
echo   [1] Launch in Default Browser (Recommended)
echo   [2] Launch in Chrome (Fullscreen)
echo   [3] Launch in Edge (Fullscreen)
echo   [4] Launch in Firefox
echo   [5] Exit
echo.

set /p choice=  Your choice: 

set "GAME_PATH=%~dp0UI\Views\index.html"

if "%choice%"=="1" (
    echo.
    echo   Launching Whispering Shadows...
    start "" "%GAME_PATH%"
    timeout /t 2 /nobreak >nul
    exit
)

if "%choice%"=="2" (
    echo.
    echo   Launching in Chrome (Fullscreen)...
    where chrome >nul 2>&1
    if %errorlevel%==0 (
        start "" chrome --start-fullscreen --app="file:///%GAME_PATH:\=/%" 
    ) else (
        start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --start-fullscreen --app="file:///%GAME_PATH:\=/%" 2>nul || (
            start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --start-fullscreen --app="file:///%GAME_PATH:\=/%" 2>nul || (
                echo   Chrome not found! Falling back to default browser...
                start "" "%GAME_PATH%"
            )
        )
    )
    timeout /t 2 /nobreak >nul
    exit
)

if "%choice%"=="3" (
    echo.
    echo   Launching in Edge (Fullscreen)...
    start "" msedge --start-fullscreen --app="file:///%GAME_PATH:\=/%" 2>nul || (
        echo   Edge not found! Falling back to default browser...
        start "" "%GAME_PATH%"
    )
    timeout /t 2 /nobreak >nul
    exit
)

if "%choice%"=="4" (
    echo.
    echo   Launching in Firefox...
    start "" firefox "%GAME_PATH%" 2>nul || (
        echo   Firefox not found! Falling back to default browser...
        start "" "%GAME_PATH%"
    )
    timeout /t 2 /nobreak >nul
    exit
)

if "%choice%"=="5" (
    exit
)

echo.
echo   Invalid choice. Press any key to try again...
pause >nul
call "%~f0"
