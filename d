[33mcommit a2472efcb4f394cab36b6e4f4114ab90d1db3606[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: Fonsi <alfonso@crescent-integrations.com>
Date:   Mon Apr 8 15:08:03 2019 +0200

    Conecta con el servidor pero aun no guarda nada

[1mdiff --git a/client b/client[m
[1mnew file mode 160000[m
[1mindex 0000000..148e618[m
[1m--- /dev/null[m
[1m+++ b/client[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mSubproject commit 148e61836093640c48187998dc66523336b11702[m
[1mdiff --git a/node_modules/.bin/concurrently b/node_modules/.bin/concurrently[m
[1mnew file mode 100644[m
[1mindex 0000000..ec7060f[m
[1m--- /dev/null[m
[1m+++ b/node_modules/.bin/concurrently[m
[36m@@ -0,0 +1,15 @@[m
[32m+[m[32m#!/bin/sh[m
[32m+[m[32mbasedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")[m
[32m+[m
[32m+[m[32mcase `uname` in[m
[32m+[m[32m    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;[m
[32m+[m[32mesac[m
[32m+[m
[32m+[m[32mif [ -x "$basedir/node" ]; then[m
[32m+[m[32m  "$basedir/node"  "$basedir/../concurrently/bin/concurrently.js" "$@"[m
[32m+[m[32m  ret=$?[m
[32m+[m[32melse[m[41m [m
[32m+[m[32m  node  "$basedir/../concurrently/bin/concurrently.js" "$@"[m
[32m+[m[32m  ret=$?[m
[32m+[m[32mfi[m
[32m+[m[32mexit $ret[m
[1mdiff --git a/node_modules/.bin/concurrently.cmd b/node_modules/.bin/concurrently.cmd[m
[1mnew file mode 100644[m
[1mindex 0000000..9e4aa93[m
[1m--- /dev/null[m
[1m+++ b/node_modules/.bin/concurrently.cmd[m
[36m@@ -0,0 +1,7 @@[m
[32m+[m[32m@IF EXIST "%~dp0\node.exe" ([m
[32m+[m[32m  "%~dp0\node.exe"  "%~dp0\..\concurrently\bin\concurrently.js" %*[m
[32m+[m[32m) ELSE ([m
[32m+[m[32m  @SETLOCAL[m
[32m+[m[32m  @SET PATHEXT=%PATHEXT:;.JS;=;%[m
[32m+[m[32m  node  "%~dp0\..\concurrently\bin\concurrently.js" %*[m
[32m+[m[32m)[m
\ No newline at end of file[m
[1mdiff --git a/node_modules/.bin/semver b/node_modules/.bin/semver[m
[1mnew file mode 100644[m
[1mindex 0000000..d592e69[m
[1m--- /dev/null[m
[1m+++ b/node_modules/.bin/semver[m
[36m@@ -0,0 +1,15 @@[m
[32m+[m[32m#!/bin/sh[m
[32m+[m[32mbasedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")[m
[32m+[m
[32m+[m[32mcase `uname` in[m
[32m+[m[32m    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;[m
[32m+[m[32mesac[m
[32m+[m
[32m+[m[32mif [ -x "$basedir/node" ]; then[m
[32m+[m[32m  "$basedir/node"  "$basedir/../semver/bin/semver" "$@"[m
[32m+[m[32m  ret=$?[m
[32m+[m[32melse[m[41m [m
[32m+[m[32m  node  "$basedir/../semver/bin/semver" "$@"[m
[32m+[m[32m  ret=$?[m
[32m+[m[32mfi[m
[32m+[m[32mexit $ret[m
[1mdiff --git a/node_modules/.bin/semver.cmd b/node_modules/.bin/semver.cmd[m
[1mnew file mode 100644[m
[1mindex 0000000..37c00a4[m
[1m--- /dev/null[m
[1m+++ b/node_modules/.bin/semver.cmd[m
[36m@@ -0,0 +1,7 @@[m
[32m+[m[32m@IF EXIST "%~dp0\node.exe" ([m
[32m+[m[32m  "%~dp0\node.exe"  "%~dp0\..\semver\bin\semver" %*[m
[32m+[m[32m) ELSE ([m
[32m+[m[32m  @SETLOCAL[m
[32m+[m[32m  @SET PATHEXT=%PATHEXT:;.JS;=;%[m
[32m+[m[32m  node  "%~dp0\..\semver\bin\semver" %*[m
[32m+[m[32m)[m
\ No newline at end of file[m
[1mdiff --git a/node_modules/.bin/tree-kill b/node_modules/.bin/tree-kill[m
[1mnew file mode 100644[m
[1mindex 0000000..45ff2e3[m
[1m--- /dev/null[m
[1m+++ b/node_modules/.bin/tree-kill[m
[36m@@ -0,0 +1,15 @@[m
[32m+[m[32m#!/bin/sh[m
[32m+[m[32mbasedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")[m
[32m+[m
[32m+[m[32mcase `uname` in[m
[32m+[m[32m    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;[m
[32m+[m[32mesac[m
[32m+[m
[32m+[m[32mif [ -x "$basedir/node" ]; then[m
[32m+[m[32m  "$basedir/node"  "$basedir/../tree-kill/cli.js" "$@"[m
[32m+[m[32m  ret=$?[m
[32m+[m[32melse[m[41m [m
[32m+[m[32m  node  "$basedir/../tree-kill/cli.js" "$@"[m
[32m+[m[32m  ret=$?[m
[32m+[m[32mfi[m
[32m+[m[32mexit $ret[m
[1mdiff --git a/node_modules/.bin/tree-kill.cmd b/node_modules/.bin/tree-