# Pebblous Claude Skills

Pebblous 공용 Claude Code 스킬 모음입니다.

## 설치
git clone https://github.com/pebblousDev/claude-skills.git ~/.claude/skills

## 업데이트
cd ~/.claude/skills && git pull

## 스킬 추가/수정 방법

1. 본인 이름으로 브랜치 생성
git checkout -b nameun

2. 스킬 작성 후 커밋
git add .
git commit -m "feat: 스킬명 추가"
git push origin nameun

3. GitHub에서 PR 생성 → main 머지 요청

## 브랜치 네이밍
{이름}
예) nameun, joohaeng, subi

## 스킬 작성 규칙

### SKILL.md 필수 포함 항목
- 스킬 목적 (언제 사용하는지)
- 사용 방법
- 참조 파일 목록

### 파일 구조
스킬이 단순하면 단일 .skill 파일로
복잡하면 폴더로 구성 (SKILL.md + 보조 파일)

### 커밋 메시지
feat: 새 스킬 추가
fix: 스킬 수정
docs: 문서 수정
