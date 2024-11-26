# swanzbackendAPI/db_router.py

class SwanzBackendRouter:
    def db_for_read(self, model, **hints):
        """
        Attempts to read swanzbackendAPI models go to a specific database.
        """
        if model._meta.app_label == 'swanzbackendAPI':
            return 'secondary'  # or the name of your database for swanzbackendAPI
        return None

    def db_for_write(self, model, **hints):
        """
        Attempts to write swanzbackendAPI models go to a specific database.
        """
        if model._meta.app_label == 'swanzbackendAPI':
            return 'secondary'  # or the name of your database for swanzbackendAPI
        return None

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow relations if a model in the swanzbackendAPI app is involved.
        """
        if obj1._meta.app_label == 'swanzbackendAPI' or obj2._meta.app_label == 'swanzbackendAPI':
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the swanzbackendAPI app only appears in the 'secondary' database.
        """
        if app_label == 'swanzbackendAPI':
            return db == 'secondary'  # or the name of your database for swanzbackendAPI
        return None
