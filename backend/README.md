# NEOM Backend API

Django REST API backend for NEOM Distribution website.

## Setup

1. Create virtual environment:
```bash
python -m venv venv
```

2. Activate virtual environment:
```bash
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Create superuser:
```bash
python manage.py createsuperuser
```

6. Run development server:
```bash
python manage.py runserver
```

The API will be available at http://127.0.0.1:8000/

## Project Structure

- `neom_backend/` - Django project settings
- `manage.py` - Django management script
- `requirements.txt` - Python dependencies