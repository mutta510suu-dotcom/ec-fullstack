# ------------------------------------
# 1. ビルドステージ: アプリケーションのビルド
# ------------------------------------
# JDK環境でビルドを実行
FROM eclipse-temurin:21-jdk-jammy AS build
WORKDIR /app

# Maven Wrapper と設定をコピー
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# 依存関係を事前ダウンロード（キャッシュ用）
RUN ./mvnw dependency:go-offline -B

# ソースコードをコピー
COPY src ./src

# アプリケーションをビルドして実行可能Jarを作成
RUN ./mvnw clean package -DskipTests

# ------------------------------------
# 2. 実行ステージ: 軽量なJREでアプリケーションを実行
# ------------------------------------
# JRE環境（Jammyベース）で実行
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# ビルドステージからJarファイルをコピー
# Jarファイル名はpom.xmlに依存しますが、ここでは一旦ワイルドカードを使用します
COPY --from=build /app/target/*.jar app.jar

# -----------------------------
# Spring Bootの起動
# CMDでJarファイルを直接起動し、コンテナを永続化させる
# -----------------------------
CMD ["java", "-jar", "app.jar", "--spring.profiles.active=dev"]

# -----------------------------
# 公開ポート
# -----------------------------
EXPOSE 8080
